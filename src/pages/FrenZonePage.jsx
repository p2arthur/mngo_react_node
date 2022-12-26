import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";

function FrenZonePage() {
  return (
    <div className="bg-purple-100 flex flex-col justify-center space-y-5">
      <NavigationBar />
      <div className="flex flex-wrap justify-center md:flex-row md:justify-between w-full py-10 px-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default FrenZonePage;
