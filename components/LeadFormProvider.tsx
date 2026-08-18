"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import LeadForm from "./LeadForm";

type LeadFormContextValue = {
  isOpen: boolean;
  openLeadForm: () => void;
  closeLeadForm: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = useCallback(() => setIsOpen(true), []);
  const closeLeadForm = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openLeadForm, closeLeadForm }),
    [isOpen, openLeadForm, closeLeadForm]
  );

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <LeadForm isOpen={isOpen} onClose={closeLeadForm} />
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return ctx;
}
