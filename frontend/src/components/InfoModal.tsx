import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: ReactNode;
  img?: string;
}

const InfoModal = ({ isOpen, onClose, title, description, img }: InfoModalProps) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full h-[500px] md:h-[550px] p-6 rounded-xl bg-[var(--card)] border border-white/10 text-white flex flex-col">
        <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
        
        <div className="flex-1 overflow-y-auto scrollbar-thin mt-2 pr-2">
          <DialogDescription className="text-white/70">{description}</DialogDescription>
          {img && (
            <img src={img} alt={title} className="mt-4 w-full rounded-lg shadow-lg border border-white/10" />
          )}
        </div>

        <div className="mt-4">
          <DialogClose asChild>
            <button className="w-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 py-2.5 rounded-xl font-semibold transition-all duration-300">
              Close
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
