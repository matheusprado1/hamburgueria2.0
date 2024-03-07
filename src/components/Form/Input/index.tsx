import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string,
  error?: string
}

const Input = forwardRef(({ id, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div>
      <StyledInputContainer>
        <input type='text' id={id} ref={ref} {...rest} placeholder=' ' />
        <label htmlFor={id}>{id}</label>
      </StyledInputContainer>
      <StyledParagraph fontColor='red'>{error ? error : ""}</StyledParagraph>
    </div>
  )
});

export default Input;
