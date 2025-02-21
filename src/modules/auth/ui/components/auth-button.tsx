"use client";

import React from 'react';
import {ClapperboardIcon, UserCircle} from "lucide-react";

import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

import {Button} from "@/components/ui/button";

export const AuthButton = () => {
    return (
        <>
            <SignedIn>
                <UserButton>
                    <UserButton.MenuItems>
                        {/*TODO: Add user profile menu items*/}
                        <UserButton.Link
                            href="/studio"
                            label="Studio"
                            labelIcon={<ClapperboardIcon className="size-4"/>}
                        />
                        <UserButton.Action label="manageAccount"/>
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button variant="outline"
                            className="px-4 py-2 text-sm font-medium text-blue-600 border-blue-500/20 rounded-full shadow-none">
                        <UserCircle/>
                        Sign in
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
};

