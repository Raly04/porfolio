// eslint-disable-next-line react/prop-types
export default function SkillBox({ group, elements }) {
  return (
    <div className="border-0.5 border-secondary ">
      <div className="border-b-0.5 border-secondary p-2 font-semibold">
        {group}
      </div>
      <div className="p-2 text-secondary">
        {
          // eslint-disable-next-line react/prop-types
          elements.map((item, index) => {
            return (
              <p key={index} className="py-1">
                {item}
              </p>
            );
          })
        }
      </div>
    </div>
  );
}
