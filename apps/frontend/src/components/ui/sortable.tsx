// components/SortableFields.tsx
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
  } from '@dnd-kit/core';
  import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';
  import { SortableField } from '@/components/ui/sortableField';
import { FormData } from '@/app/types';
  
  interface SortableFieldsProps {
    values: FormData;
    setValues: (values: FormData) => void;
  }
  
  export const SortableFields = ({ values, setValues }: SortableFieldsProps) => {
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );
  
    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;
  
      if (over && active.id !== over.id) {
        const oldIndex = values.fields.findIndex(
          (field) => (field.id || field.order.toString()) === active.id
        );
        const newIndex = values.fields.findIndex(
          (field) => (field.id || field.order.toString()) === over.id
        );
  
        setValues({
          ...values,
          fields: arrayMove(values.fields, oldIndex, newIndex),
        });
      }
    };
  
    return (
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={values.fields.map((field) => field.id || field.order.toString())}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {values.fields.map((field, index) => (
              <SortableField
                key={field.id || index}
                field={field}
                index={index}
                values={values}
                setValues={setValues}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    );
  };