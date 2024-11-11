import Table from "./table";

function GameSide() {
    return <div style={{
        position: 'relative',
        width: '70%',
        height: '100vh',
        border: '1px solid black',
        backgroundImage: 'url("https://wallpapers.com/images/featured/wood-floor-background-wl3vty8w87fpi887.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
    }}>
        
        <Table/>
    </div>;
}

export default GameSide;