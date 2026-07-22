import { CheckCircle2Icon, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/InputField";
import { Reveal } from "@/components/Reveal";

import coverPlan from "@/assets/guides/cover-plan-treninga.png";
import coverRecipes from "@/assets/guides/cover-knjiga-recepata.png";
import { useFreeGuidesSection } from "./useFreeGuidesSection";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const BundlesSent = () => (
  <Alert>
    <CheckCircle2Icon />
    <AlertTitle>Vodiči su uspečno poslati</AlertTitle>
    <AlertDescription>
      Proveri svoj inbox i spam za svaki slučaj.
    </AlertDescription>
  </Alert>
);

export const FreeGuidesSection = () => {
  const { email, loading, error, onChangeEmail, onSubmit, isSent } =
    useFreeGuidesSection();

  return (
    <section className="bg-black pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 md:p-12">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
            {/* PDF Covers */}
            <div className="relative flex shrink-0 justify-center">
              <img
                src={coverPlan}
                alt="Plan treninga od Mande"
                className="w-36 rotate-6 rounded-xl shadow-2xl ring-1 ring-white/10 md:w-44 transition-scale duration-300 hover:scale-105"
              />
              <img
                src={coverRecipes}
                alt="Knjiga zdravih recepata od Mande"
                className="-ml-12 w-36 rotate-6 rounded-xl shadow-2xl ring-1 ring-white/10 md:w-44 transition-scale duration-300 hover:scale-105"
              />
            </div>

            {/* Copy + form */}
            <div className="flex w-full flex-col gap-4">
              <span className="flex size-12 items-center justify-center rounded-xl bg-white text-black">
                <Download className="size-6" />
              </span>
              <h3 className="font-barlow text-3xl font-extrabold tracking-tight text-white uppercase md:text-4xl">
                2 besplatna vodiča
              </h3>
              <p className="max-w-xl text-sm text-white/60 md:text-base">
                Ostavi svoj mejl i odmah ti šaljem plan treninga i knjigu
                zdravih recepata, <em>potpuno besplatno</em>, bez obaveze.
              </p>
              {isSent ? (
                <BundlesSent />
              ) : (
                <form
                  className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-start"
                  onSubmit={onSubmit}
                >
                  <InputField
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="tvoj.email@gmail.com"
                    containerClassName="sm:flex-1"
                    errorMessage={error}
                  />
                  <Button
                    id="free-guides-cta"
                    type="submit"
                    size="lg"
                    className="font-semibold"
                    disabled={loading}
                  >
                    Pošalji mi vodiče {loading && <Spinner />}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <span className="font-barlow pointer-events-none absolute -right-6 -bottom-10 text-[10rem] leading-none font-black text-white/3 select-none">
            PDF
          </span>
        </Reveal>
      </div>
    </section>
  );
};
