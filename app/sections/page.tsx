'use client'
import {
    IconClipboardCopy,
    IconHome2,
    IconListCheck,
    IconLogout, IconStar,
    IconSwitchHorizontal,
} from '@tabler/icons-react';

import { Stack, Tooltip, UnstyledButton } from '@mantine/core';
import { useState } from "react";

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const sectionsType = [
    { icon: IconClipboardCopy , label: 'Projects'},
    { icon: IconListCheck, label: 'MyTasks'},
    { icon: IconStar, label: 'Favorite' },
]

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton
                onClick={onClick}
                data-active={active || undefined}
                aria-label={label}
            >
                <Icon size={20} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

export default function NavbarMinimal() {
    const [active, setActive]= useState(2);

    const links = sectionsType.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <nav>
            <div>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={0}>
                <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                <NavbarLink icon={IconLogout} label="Logout" />
            </Stack>
        </nav>
    );
}
