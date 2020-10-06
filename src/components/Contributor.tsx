import React, {FC, ImgHTMLAttributes} from 'react';
import styles from './Contributor.module.scss';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export const Contributor: FC<Props> = props => <img className={styles.image} {...props} />;
