import React from "react";
import { Button,  Form, Input, Select } from "antd";
import ErrorMsg from "./components/ErrorMsg";
import {  GlobalOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App = () => (
  <div className="flex w-full h-screen items-center justify-center">
    <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <h2 className="text-xl  mb-6 text-gray-500">Let's get you started</h2>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Full Name" name="fullName">
          <Input prefix={<UserOutlined />} />
          <ErrorMsg message="This is the name you'll use on your profile." />
        </Form.Item>

        <Form.Item label="Email Address" name="email">
          <Input prefix={<MailOutlined />} />
          <ErrorMsg message="This is the name you'll use on your profile." />
        </Form.Item>

        <Form.Item label="Phone Number" name="phoneNumber">
          <Input prefix={<PhoneOutlined />} />
          <ErrorMsg message="This is the name you'll use on your profile." />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password prefix={<LockOutlined />} />
          <ErrorMsg message="This is the name you'll use on your profile." />
        </Form.Item>

        <Form.Item
          label={
            <span className="flex items-center gap-1">
              <span>Location</span>
              <span className="text-[10px] text-gray-500">
                (Optional)
              </span>
            </span>
          } name="location" >
          <Select
            prefix={<GlobalOutlined />}
            className="w-full"
            defaultValue="vietnam"
            name="location"
            options={[
              { value: "vietnam", label: "Vietnam" },
              { value: "japan", label: "Japan" },
              { value: "china", label: "China" },
              { value: "other", label: "Other" },
            ]}
          />
          <ErrorMsg message="This is the name you'll use on your profile." />
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  </div>
);
export default App;
