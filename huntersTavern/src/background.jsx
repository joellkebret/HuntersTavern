
let Background = ({ imageUrl }) => {
    const backgroundStyle = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed', // This will ensure the background covers the entire viewport
        top: 0,
        left: 0,
        zIndex: -1 // This keeps the background behind other content
    };

    return <div style={backgroundStyle} />;
};

export default Background;