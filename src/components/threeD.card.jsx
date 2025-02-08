import Image from "../assets/images/sary.jpeg";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-background dark:border-white/[0.2] border-black/[0.1] w-full sm:w-full h-auto p-6 border">
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="w-full">
            <img
              src={Image}
              className="w-full xl:h-[400px] xl:w- h-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-20"></div>
      </CardBody>
    </CardContainer>
  );
}
