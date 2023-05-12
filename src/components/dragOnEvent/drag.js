import { useDrag } from 'react-dnd'; {/*need to npm install --save react-dnd*/}

const DraggableEvent = ({ event }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'event', event },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '0.5rem',
        marginBottom: '0.5rem',
      }}
    >
      {event.title}
    </div>
  );
};

export default DraggableEvent;
