import MyButton from "./my.button";
import openIcon from "../assets/component.svg";
import secretIcon from "../assets/lock.svg";

// eslint-disable-next-line react/prop-types
function WorkBox({ link ,image, description, title, technologies, isSecret }) {

  const gotToGithub = ()=>{
    window.open(link);
  };

  return (
    <div className="border-1 border-secondary">
      <div className="w-full flex items-center justify-center">
        <img src={image} alt="" className="object-fill" />
      </div>
      <div className="text-secondary border-y-1 border-secondary py-2 px-4">
        {technologies}
      </div>
      <div className="p-4">
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-secondary mt-4">{description}</div>
      </div>
      <div className="pl-4 pb-4 flex flex-row items-center justify-start gap-4">
        {
          isSecret ? '' : <MyButton
          borderColor="primary"
          bg="background"
          textColor="foreground"
          text="Github"
          action={gotToGithub}
          img={openIcon}
        />
        }
        {isSecret && (
          <MyButton
            borderColor="secondary"
            bg="background"
            textColor="secondary"
            text="Secret"
            action={() => console.log("This repo is private")}
            img={secretIcon}
          />
        )}
      </div>
    </div>
  );
}

export default WorkBox;
