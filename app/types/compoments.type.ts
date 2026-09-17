export type TInfomationProps = {
  src: string;
  subject: string;
  content: string;
  secondContent?: string;
};

export type TSkillProps = {
    text: string; 
    color: string};

 export type TTitleProps ={ 
    text: string; 
    textColor?: string; 
    borderColor?: string; 
    targetId?: string };

export type TSubjectProps = {
    text: string;
    src: string;
    textColor?: string;
    borderColor?: string;};

export type TSkillRowProps = {
  src: string;
  skillText: string;
  color: string;  
  skillList: string[];
};