'use client';
import { signOut } from 'next-auth/react';
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from '@/components/ui/resizable-navbar';
import usePost from '@/hooks/usePost';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavItem {
  name: string;
  link: string;
  active: boolean;
}

export function NavbarProfile({ navItems }: { navItems: NavItem[] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { postData } = usePost();

  const [dailyMessages, setDailyMessages] = useState<number>(0);

  const params = useParams();
  const userId = params?.id as string | undefined;

  useEffect(() => {
    postData({
      endpoint: '/daily-messages/check',
      data: { userId },
      onSuccess: (res) => {
        setDailyMessages(res.dailyMessages);
      },
    });
  }, [userId, postData]);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <div className="text-sm ">Remaining daily message: {dailyMessages ? <b>{5 - dailyMessages}</b> : 0} </div>
            <NavbarButton onClick={() => signOut()} variant="primary">
              Logout
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a key={`mobile-link-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="relative text-black">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="text-sm">Remaining daily message: {dailyMessages ? <b>{dailyMessages - 5}</b> : 0} </div>
            <div className="flex w-full flex-col gap-4">
              <NavbarButton onClick={() => signOut()} variant="primary" className="w-full">
                Logout
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}
