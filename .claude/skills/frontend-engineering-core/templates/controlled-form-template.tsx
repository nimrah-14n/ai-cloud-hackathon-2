type Props = {
    onSubmit: (value: string) => void;
  };
  
  export function ControlledInput({ onSubmit }: Props) {
    const [value, setValue] = useState("");
  
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(value);
          setValue("");
        }}
        className="flex gap-2"
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter task"
        />
        <button className="bg-black text-white px-4 rounded">
          Add
        </button>
      </form>
    );
  }