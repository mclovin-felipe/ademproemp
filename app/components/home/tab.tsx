const Tab = ({
  active,
  title,
  setActive,
  index,
}: {
  active: boolean;
  title: string;
  setActive: (index: number) => void;
  index: number;
}) => {
  return (
    <li>
      <div
        onClick={() => setActive(index)}
        className={`${
          active
            ? "inline-block p-4 text-primary border-b-2 border-primary rounded-t-lg active dark:text-primary dark:border-primary"
            : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-white dark:hover:text-white"
        } transition-colors duration-200`}
      >
        {title}
      </div>
    </li>
  );
};

export default Tab;
