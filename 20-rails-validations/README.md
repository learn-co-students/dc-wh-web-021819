# Rails Validations

- Create server side validations using Active record
- Validate different data types i.e. string, numericality, boolean
- Use the Flash Hash to render error messages
- Explain the difference between render and redirect
- Create custom validations

## Why Validate?


Why, as a designer of applications?
- don't want bad data in the database
  - uniform data is easier to work with
  - cause errors down the line
  - violations of 'business logic'
    - duplication
    - (security) password length / characters


What you've seen as a user
- prevent empty fields
- credit card validation
- confirm email / password (email confirmation as 'new' strategy)
- date format
- unique username
- (legal) terms of service 'reading' confirmation
- ...


## where can we validate?

Why?

You can't trust your users
You can't trust yourself

- Database level validations
 - database constraints
 - prevent application validations from being too wrong

- Application level validations
  - model validations in Rails
  - express custom logic

- Client side validations
  - Form validation
  - For the user experience


## Model validations


## Showing validations

render vs. redirect

## Rails Flash Hash

## Advanced validations

### Custom validations

### Database Constraints
