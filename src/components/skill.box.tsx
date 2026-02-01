interface SkillBoxProps {
    group: string;
    elements: string[];
}

export default function SkillBox({ group, elements }: SkillBoxProps) {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-primary/80 uppercase tracking-wider">{group}</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                {elements.map((item, index) => (
                    <span
                        key={index}
                        className="text-secondary hover:text-primary transition-colors duration-200 text-base font-medium"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
