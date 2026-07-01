import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Apply Now | Triad UCity Apartments",
  description:
    "Review the application process and start your online leasing application for Triad UCity Apartments in Philadelphia.",
};

const APPLICATION_STEPS = [
  {
    number: "1",
    title: "Complete Application",
    description: "Fill out your personal information, employment details, and rental history.",
  },
  {
    number: "2",
    title: "Pay Application Fee",
    description: "Submit the $50 processing fee securely by credit or debit card.",
  },
  {
    number: "3",
    title: "Background & Credit Check",
    description: "Our team will review your application within 24 to 48 hours.",
  },
  {
    number: "4",
    title: "Approval & Lease",
    description: "Once approved, you can sign your lease and schedule your move-in.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply Now"
        title="Apply for your new home."
        description="Complete your application online through our secure AppFolio portal."
        image="/images/home/finalctatriad.jpg"
        imageAlt="Triad UCity Apartments exterior"
      />

      <section className="py-20 md:py-24 lg:py-32 bg-bone">
        <Container size="wide">
          <SectionHeading
            eyebrow="Application"
            title="How it works."
            description="Before continuing to the application portal, please review the leasing application process below."
            align="center"
          />

          <div className="mt-14 max-w-4xl mx-auto bg-mist border border-ink/10 p-8 md:p-12 lg:p-16">
            <div className="space-y-0">
              {APPLICATION_STEPS.map((step, index) => (
                <div key={step.number}>
                  <div className="grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr] gap-5 md:gap-8 items-start py-6">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-stone text-bone font-serif text-xl md:text-2xl">
                      {step.number}
                    </div>

                    <div>
                      <p className="text-base md:text-lg text-stone leading-relaxed">
                        <span className="font-semibold text-ink">
                          {step.title}
                        </span>{" "}
                        - {step.description}
                      </p>
                    </div>
                  </div>

                  {index < APPLICATION_STEPS.length - 1 && (
                    <div className="ml-[68px] md:ml-[96px] h-px bg-ink/15" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-5">
            <Button
              href="https://vicintas.appfolio.com/listings"
              variant="primary"
              size="md"
              //target="_blank"
              //rel="noopener noreferrer"
            >
              Start Application
            </Button>

            <p className="max-w-2xl text-center text-sm md:text-base text-stone leading-relaxed">
              You will be redirected to the Vicintas/AppFolio listings page.
              Please select Triad UCity Apartments from the available listings
              and follow the application steps there.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}