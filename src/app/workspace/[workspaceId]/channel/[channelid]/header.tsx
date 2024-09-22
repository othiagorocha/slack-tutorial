import { FC } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className='bg-white border-b h-[49px] flex items-center px-4 overflow-hidden '>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            className='text-lg font-semibold px-2 overflow-hidden w-auto'
            size={"sm"}>
            <span className='truncate'># {title}</span>
            <FaChevronDown className='size-2.5 ml-2' />
          </Button>
        </DialogTrigger>
        <DialogContent className='p-0 bg-gray-50 overflow-hidden'>
          <DialogHeader className='p-4 border-b bg-white'>
            <DialogTitle># {title}</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
