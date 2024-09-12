import getBanner from "@/actions/get-banner";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const banner = await getBanner("50356a17-d6eb-4ed4-b7ae-42e70d9734b8")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
      </div>
    </Container>
  );
};

export default HomePage;
