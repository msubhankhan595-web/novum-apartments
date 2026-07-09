import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const RESIDENT_PORTAL_URL =
  "https://account.appfolio.com/realms/foliospace/protocol/openid-connect/auth?activation_state&client_id=client-012e6a12-1c8f-4a98-94d8-20fc88af5593&portfolio_uuid&redirect_uri=https%3A%2F%2Fvicintas.appfolio.com%2Fconnect%2Fusers%2Foauth%2Fcallback&response_type=code&scope=openid&session_timed_out=false&state";

export const metadata = {
  title: "Resident Portal | Novum Apartments",
  description:
    "Access the resident portal for Novum Apartments through AppFolio.",
};

export default function ResidentPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Resident Portal"
        title="Manage your home online."
        description="Current residents can access rent payments, maintenance requests, lease information, and account details through the resident portal."
        image="/images/home/kitchengallerynovum.jpg"
        imageAlt="Novum Apartments exterior"
      />

      <section className="py-20 md:py-24 lg:py-32 bg-bone">
        <Container size="wide">
          <SectionHeading
            eyebrow="For Current Residents"
            title="Access your resident portal."
            description="Use the resident portal to manage your account, submit maintenance requests, and view important lease information."
            align="center"
          />

          <div className="mt-14 max-w-3xl mx-auto bg-mist border border-ink/10 p-8 md:p-12 text-center">
            <p className="text-base md:text-lg text-stone leading-relaxed">
              You will be redirected to the secure AppFolio resident portal.
              Please use your resident login credentials to access your account.
            </p>

            <div className="mt-10">
              <Button href={RESIDENT_PORTAL_URL} variant="primary" size="md">
                Log In to Resident Portal
              </Button>
            </div>

            <p className="mt-8 text-sm text-stone leading-relaxed">
              If you are having trouble accessing your account, please contact
              the leasing team for assistance.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
