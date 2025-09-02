function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        event.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
}