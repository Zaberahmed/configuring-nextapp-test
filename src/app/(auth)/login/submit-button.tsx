import { Button } from "flowbite-react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ isValid }: { isValid: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending || !isValid}
      aria-disabled={pending || !isValid}>
      Submit
    </Button>
  );
};

export default SubmitButton;
