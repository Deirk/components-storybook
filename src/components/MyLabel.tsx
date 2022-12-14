import './mylabel.css';

export interface MyLabelProps {
  /**
   * Label contents
  */
  label?: string;
  /**
    * How large should the label be?
  */
  size?: 'normal' | 'h1' | 'h2' | 'h3' ;
  /**
    * Is the content all caps?
  */
  allCaps?: boolean ;
  /**
    * which default color should the label be?
  */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
    * which custom color should the label be?
  */
  fontColor?: string;
  /**
    * which background color should the label be?
  */
  backgroundColor?: string;
}

/**
 * Label for content shown to the user
 */
export const MyLabel = ( {
  allCaps = false,
  color = 'primary',
  label = 'no label',
  size = 'normal',
  fontColor = '',
  backgroundColor = 'transparent',
} : MyLabelProps ) => {
  return (
    <span className={ `label ${ size } text-${ color }` } style={{color: fontColor, backgroundColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
