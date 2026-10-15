import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";
import LocalTime from "@/components/LocalTime";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Md Kaif about a website, an app, a hardware project, motion graphics or a job opportunity.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s *talk.*"
        aside={
          <p className="text-[16px] leading-relaxed text-muted">
            A project, a role, or just a question about a circuit — I read everything and usually reply within a day. It’s{" "}
            <span className="text-text">
              <LocalTime />
            </span>{" "}
            in India right now.
          </p>
        }
      />
      <ContactPanel />
    </>
  );
}
