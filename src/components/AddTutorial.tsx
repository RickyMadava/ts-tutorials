import { Link } from "react-router-dom";
import logoLabs from "../../public/novity-labs.png";
import {
  Alert,
  Button,
  Label,
  Spinner,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

const AddTutorial = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <img src={logoLabs} alt="logo" className="w-auto h-20" />
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can add a new tutorial here.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Title" />
              <TextInput
                type="text"
                placeholder="Tutorial Title"
                id="username"
              />
            </div>
            <div>
              <Label value="Description" />
              <Textarea
                placeholder="Tutorial Description"
                id="username"
                rows={4}
              />
            </div>
            <Button
              gradientDuoTone="tealToLime"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>

          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTutorial;
