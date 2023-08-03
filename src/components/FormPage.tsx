import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface FormPageProps {
  handleTodos: (title: string) => void;
  editData: { id: number; title: string } | undefined;
  editTodos: (title: string) => void;
}

const FormPage: React.FC<FormPageProps> = ({
  handleTodos,
  editData,
  editTodos,
}) => {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
    }
  }, [editData]);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;
    setTitle(data);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editData) {
      editTodos(title);
      setTitle("");
    } else {
      handleTodos(title);
      setTitle("");
    }
  };

  return (
    <div>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">Title</label>
        <br />
        <input
          className="input"
          type="text"
          placeholder="Enter title ..."
          value={title}
          onChange={handleTitle}
        />
        <br />

        <input className="submit" type="submit" value="SAVE" />
      </form>
    </div>
  );
};

export default FormPage;
