import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { login } from "../../features/slices/authSlices";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <Typography variant="h3" color="black">
          Sign In
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            type="text"
            name="email"
            autoComplete="off"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            label="Password"
            size="lg"
            type="text"
            name="password"
            autoComplete="off"
            value={formData.password}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            label="Image url (optional)"
            size="lg"
            type="text"
            name="image"
            autoComplete="off"
            value={formData.image}
            onChange={(e) => handleInputChange(e)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(formData))}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
