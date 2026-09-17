import doctors from "../data/doctors";
import DoctorCard from "./DoctorCard";
import SectionHeading from "./SectionHeading";

export default function DoctorsSection({ limit, detailed = false }) {
  const list = limit ? doctors.slice(0, limit) : doctors;

  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Meet the team"
          title="Dentists who explain before they treat"
          description="Every clinician here trained beyond dental school in their focus area — and still sits down to talk through options before picking up a tool."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} detailed={detailed} />
          ))}
        </div>
      </div>
    </section>
  );
}
