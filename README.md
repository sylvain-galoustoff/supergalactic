# SUPERGALACTIC UI KIT

This package offers a series of web interface elements in the form of React components.  
The components come with the bare minimum of CSS rules to allow for great flexibility in appearance customization.

## Available components

### DataSearch

DataSearch is a search field that displays result suggestions as the user types search terms.

This component requires an array of data to be passed as the `data` prop.

`<DataSearch data={arrayOfStrings} />`

### DataTable

DataTable is a component that displays data in the form of an HTML table. It provides:

- Pagination with options for 10, 25, 50, or 100 rows
- A search field to filter the table
- The ability to sort each column in ascending or descending alphanumeric order

This component requires an array of objects to be passed as the `data` prop.  
Each object in the array must contain exactly the same keys. These keys are used to define the columns of the table.

`<DataTable data={arrayOfObjects} />`

### Toaster

Toaster is a notification system.  
The `<Toaster />` component is the container that will receive the notifications in the 'toastList' prop.  
The list of toasts and the suppression functionalities are provided by the useToastsList hook :

```javascript
//Toaster setup
function MyComponent() {
  const { toastList, removeToast } = useToastsList();

  return <Toaster toastsList={toastList} onRemoveToast={removeToast} />;
}
```

Use the useToast() hook to trigger a notification.  
useToast takes two parameters :

- The first parameter defines a CSS class to customize the appearance of the toast according to its importance. It can only be 'success', 'warning', or 'danger'.
- The second parameter defines the message to be displayed in the toast.

```javascript
//Send a notification from any other component.
function MyOtherComponent() {
  const sendToast = useToast();

  const handleClick = () => {
    sendToast("success", "Action has succeed");
  };

  return (
    <button type="button" onClick={handleClick}>
      Send notification
    </button>
  );
}
```

## Full detailed documentation

A more comprehensive documentation and a playground are available by running the command `npm run storybook`.
