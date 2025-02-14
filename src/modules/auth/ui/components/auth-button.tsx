"use client";

import React from 'react';
import {Button} from "@/components/ui/button";
import {UserCircle} from "lucide-react";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export const AuthButton = () => {
    return (
        <>
            <SignedIn>
                <UserButton/>
                {/*    TODO: Add menu item for studio and profile */}
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

