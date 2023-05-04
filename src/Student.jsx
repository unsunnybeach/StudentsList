export const Student = ({ name, surname, grades }) => {

    return (
        <div> 
            <input type="text" value={`${name} ${surname} | ${grades}`} />

            <br /><br />
        </div>

    );
  };
  