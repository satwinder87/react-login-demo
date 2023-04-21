import {Form, useActionData, useNavigate, useNavigation} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm(props) {

  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  console.log(data);
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('..');
  }

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{props.header}</h1>
        {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                  <li key={err}>{err}</li>))
              }
            </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler}>Cancel</button>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting....' : props.text}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
