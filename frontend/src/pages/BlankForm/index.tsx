import { Formik } from 'formik';
import { RotateCcw, Rows4, Save } from 'lucide-react';
import React, { useState, useEffect } from 'react';





const BlankForm = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inputs, setInputs] = useState([]);

  // Функция для добавления нового инпута
  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), label: '', value: '', type:'text' }]);
  };

  // Функция для обновления лейбла инпута
  const handleLabelChange = (id, newLabel) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, label: newLabel } : input
      )
    );
  };
  const handleAddCheckbox = () => {
    setInputs([...inputs, { id: Date.now(), label: '', value: '', type:'checkbox' }]);
  };




  // Функция для обновления значения инпута
  const handleValueChange = (id, newValue) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, value: newValue } : input
      )
    );
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleResetForm = () => {
    setTitle('');
    setDescription('');
    setInputs([])
  };

  return (
    <div className="container m-auto">
      <h1 className="text-center text-6xl mb-[40px]">
        Create your best form from scratch!
      </h1>

      <div className="flex justify-between">
        <div className="w-[800px] mx-auto border p-[20px]">
          <div className="">
            <h2 className=" text-center text-5xl font-bold">
              {title ? title : 'My form'}
            </h2>
            <p>{description}</p>
          </div>
          <div className="flex flex-col gap-3">
          {inputs.map((input) => (
            <div key={input.id} className='flex flex-col'>
              {/* Поле для ввода лейбла */}
              <input
                type='text'
                placeholder="Введите лейбл"
                value={input.label}
                onChange={(e) => handleLabelChange(input.id, e.target.value)}
              />
              {/* Поле для ввода значения */}
              <input
                type={input.type}
                placeholder="Введите значение"
                value={input.value}
                onChange={(e) => handleValueChange(input.id, e.target.value)}
                disabled
              />
              <hr/>
            </div>
          ))}</div>
        </div>

        <div className="w-1/4">
          <div className="flex gap-[30px]">
            <button title="Save Form" className="flex gap-1">
              <Save /> Save
            </button>
            <button onClick={() => setIsPreviewMode(!isPreviewMode)}>
              {isPreviewMode ? (
                'Exit Preview'
              ) : (
                <span className="flex gap-1">
                  <Rows4 />
                  Preview
                </span>
              )}
            </button>
            <button
              title="Reset Form"
              className="flex gap-1"
              onClick={handleResetForm}
            >
              <RotateCcw /> Reset
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Enter form title"
                name="title"
                className="outline w-full"
                value={title}
                onChange={handleTitleChange}
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id=""
                placeholder="Add description"
                className="outline w-full mb-5"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
          <div className="flex gap-3 flex-col">
            <button onClick={handleAddInput} className="outline">Добавить поле</button>
            <button onClick={handleAddCheckbox} className="outline">Добавить чекбокс</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlankForm;

/*
            <button className="outline">Text Area</button>
            <button className="outline">Select</button>
            <button className="outline">Checkbox</button>
            <button className="outline">Date Picker</button>
            <button className="outline">Radio Buttons</button>
            <button className="outline">File Upload</button>
*/

/*
      {isPreviewMode && (
        <div>
          <h2>Preview Mode</h2>
          {formFields.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              {field.type === "textInput" && <TextInput {...field} disabled />}
              {field.type === "textArea" && <TextArea {...field} disabled />}
              {field.type === "selectDropdown" && <DropDown {...field} disabled />}
              {field.type === "checkbox" && <CheckBox {...field} disabled />}
              {field.type === "datePicker" && <DatePicker {...field} disabled />}
              {field.type === "radioButtons" && <RadioButtons {...field} disabled />}
              {field.type === "fileUpload" && <FileUpload {...field} disabled />}
            </div>
          ))}
        </div>
      )}*/

/*
      {!isPreviewMode && (
        <>
          

          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="formFields">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    padding: 10,
                    backgroundColor: "#f9f9f9",
                    borderRadius: 5,
                  }}
                >
                  {formFields.map((field, index) => (
                    <Draggable key={field.id} draggableId={String(field.id)} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            padding: 10,
                            margin: 5,
                            border: "1px solid gray",
                            backgroundColor: "#f4f4f4",
                            borderRadius: 4,
                          }}
                        >

                          <div>
                            <input
                              type="text"
                              value={field.label}
                              onChange={(e) => dispatch(updateLabel(field.id, e.target.value))}
                              placeholder="Edit Label"
                              style={{ marginBottom: "5px", width: "100%" }}
                            />
                            {field.type !== "selectDropdown" && field.type !== "checkbox" && field.type !== "radioButtons" && field.type !== "datePicker" && field.type !== "fileUpload" && (
                              <input
                                type="text"
                                value={field.placeholder}
                                onChange={(e) => dispatch(updatePlaceholder(field.id, e.target.value))}
                                placeholder="Edit Placeholder"
                                style={{ marginBottom: "5px", width: "100%" }}
                              />
                            )}
                          </div>

                          {field.type === "selectDropdown" || field.type === "checkbox" || field.type === "radioButtons" ? (
                            <div>
                              <button onClick={() => dispatch(updateOptions(field.id, null, "New Option"))}>Add Option</button>
                              {field.options.map((option, optionIndex) => (
                                <div key={optionIndex} style={{ display: "flex", marginBottom: "5px" }}>
                                  <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => dispatch(updateOptions(field.id, optionIndex, e.target.value))}
                                    placeholder="Option"
                                    style={{ marginRight: "5px", width: "80%" }}
                                  />
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {field.type === "textInput" && <TextInput {...field} />}
                          {field.type === "textArea" && <TextArea {...field} />}
                          {field.type === "selectDropdown" && <DropDown {...field} />}
                          {field.type === "checkbox" && <CheckBox {...field} />}
                          {field.type === "datePicker" && <DatePicker {...field} />}
                          {field.type === "radioButtons" && <RadioButtons {...field} />}
                          {field.type === "fileUpload" && <FileUpload {...field} />}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </>
      )}
      */
