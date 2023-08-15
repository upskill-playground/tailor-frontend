import React, { useState, useRef, ChangeEvent } from "react";
import Layout from "~/Layout";
import { Formik, Form } from "formik";
import FormLabel from "~/design-system/FormLabel";
import Input, { Select } from "~/design-system/Input";
import Button from "~/design-system/Button";
import { priorities } from "~/utils/enums";

const CreateTask: React.FC = () => {
  const [images, setImages] = useState<string[]>(new Array(3).fill(""));
  const fileInputRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];
  let data = {
    title: "",
    description: "",
    date: "",
    priority: "",
  };

  const handleSubmit = (doc: any) => {
    let data = {
      ...doc,
      images: images,
    };
    console.log(data);
  };

  const handleImageSelect = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setImages((prevImages) =>
          prevImages.map((image, i) => (i === index ? imageUrl : image)),
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = (index: number): void => {
    fileInputRefs[index]?.current?.click();
  };
  return (
    <Layout>
      <div className="grid place-items-center">
        <div className="w-80 md:w-96 lg:w-3/5">
          <p className="text-gray-50 text-xl capitalize mb-8 font-medium">
            create task
          </p>

          <Formik initialValues={data} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <Form>
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-8">
                  <div>
                    <FormLabel color="text-gray-400">title</FormLabel>
                    <Input
                      type="text"
                      value={values.title}
                      name="title"
                      placeholder="Enter Title"
                      width="w-full"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <FormLabel color="text-gray-400">description</FormLabel>
                    <textarea
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      placeholder={"Enter Description"}
                      rows={5}
                      className="w-full rounded bg-gray-50 text-gray-900 font-medium placeholder:text-black-200 p-3.5"
                    />
                  </div>
                  <div>
                    <FormLabel color="text-gray-400">customer</FormLabel>
                    <Select
                      placeholder="Select Customer"
                      width="w-full"
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div>
                      <FormLabel color="text-gray-400">assigned to</FormLabel>
                      <Select
                        placeholder="Assigned to"
                        width="w-full"
                        handleChange={handleChange}
                      />
                    </div>
                    <div>
                      <FormLabel color="text-gray-400">priority</FormLabel>
                      <Select
                        placeholder="Select Priority"
                        width="w-full"
                        name="priority"
                        options={priorities}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <FormLabel color="text-gray-400">due date</FormLabel>
                    <Input
                      type="date"
                      value={values.date}
                      name="date"
                      width="w-full"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {images.map((image, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleClick(idx)}
                        className={`cursor-pointer border  rounded ${
                          !image
                            ? "border-2 rounded-md border-dashed  border-gray-600"
                            : "border-gray-800"
                        }  ${
                          idx === 0
                            ? "w-full"
                            : "w-full flex-none md:w-1/2 md:flex-1"
                        }`}
                      >
                        {image ? (
                          <img
                            src={image}
                            alt={`Box ${idx + 1}`}
                            className="rounded"
                          />
                        ) : (
                          <div className="p-10 grid place-items-center text-gray-600 font-medium capitalize">
                            select image
                          </div>
                        )}
                        <input
                          ref={fileInputRefs[idx]}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(event) => handleImageSelect(event, idx)}
                        />
                      </div>
                    ))}
                  </div>

                  <Button variant="solid" width="w-full" type="submit">
                    create
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTask;
