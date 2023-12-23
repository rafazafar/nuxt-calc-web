export default () => {
  const isVisible = useState('isVisible', () => false);
  const message = useState('errorMessage', () => 'Unknown error');

  const clear = () => {
    message.value = 'Unknown error';
    isVisible.value = false;
  };

  const show = (msg?: string) => {
    message.value = msg ?? 'Error';
    isVisible.value = true;
  }

  return {
    clear,
    isVisible,
    message,
    show,

  };
}
