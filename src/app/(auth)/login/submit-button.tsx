import { Button } from "flowbite-react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      aria-disabled={pending}>
      Submit
    </Button>
  );
};

export default SubmitButton;
