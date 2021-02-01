const Job = (props) => {
    console.log(props.color);
    return (
        /* className="job-green"
        className="job-border {props.color}"

        


        */
        <div className={props.color}>
            <h2>{props.title}</h2>
            <h3>{props.h3}</h3>
        </div>
    );
};
export default Job;
