import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import BlueLogo from './BlueLogo';
import Button from '../Button';

interface MenuProps {
    trigger?: React.ReactNode;
}

const Menu = ({
    trigger
}: MenuProps) => {
    return (
        <Sheet>
            <SheetTrigger>{trigger}</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle><BlueLogo /></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className='flex flex-col gap-5'>
                    <div>Home</div>
                    <div>Features</div>
                    <div>How It Works</div>
                    <div>About Us</div>
                    <div>Testimnials</div>
                    <div>Blog</div>
                </div>
                <Button
                    content='Get The App'
                    className='mt-4'
                 />
            </SheetContent>
        </Sheet>
    )
}

export default Menu