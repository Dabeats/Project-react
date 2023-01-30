import PropTypes from "prop-types";

export function Button({text, name='usuario'}) {
console.log(text,name);

    return <button onClick={function () {
        console.log("Bnas");
    }}>
       {text} - {name}
    </button>
}

Button.propTypes ={
    text : PropTypes.string.isRequired
}
