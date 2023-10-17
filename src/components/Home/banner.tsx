import style from './home.module.scss';

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.content}>
                <h1>Repair your pc in reasonable price</h1>
                <p>All kind of pc problem including hardware, software solve here with it enginears in reasonable price</p>
            </div>
        </div>
    );
};

export default Banner;