import './Button.css'

const Button = (props) => {
  const { children, variant, isLoading, disabled,colorScheme, ...rest } = props

  console.log(rest) // {onClick:function}

  return (
    <button
      disabled={disabled || isLoading}
      className={`button button__${variant} ${colorScheme}` }
      {...rest} //onClick = {onClick}
    >
      {isLoading ? 'carregando...' : children}
    </button>
  )
}

export default Button
