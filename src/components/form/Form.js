import React from 'react';

function Form  ({newElement, data})  {
    return (
        <div>
            <form>
                <label>
                    Ім'я:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Надіслати" />
            </form>

        </div>
    );
};

export default Form;