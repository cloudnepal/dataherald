import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar, Clock, User2 } from 'lucide-react'
import { FC, HTMLAttributes } from 'react'

export interface QueryQuestionProps extends HTMLAttributes<HTMLDivElement> {
  created_by: string
  prompt_text: string
  questionDate: Date
}

const QueryQuestion: FC<QueryQuestionProps> = ({
  created_by,
  prompt_text,
  questionDate,
  className,
}) => (
  <div className={cn('flex flex-col gap-2', className)}>
    <h1 className="text-xl font-bold first-letter:capitalize">{prompt_text}</h1>
    <div className="flex gap-5">
      {[
        { icon: User2, text: created_by },
        { icon: Calendar, text: format(questionDate, 'MMMM dd, yyyy') },
        { icon: Clock, text: format(questionDate, 'hh:mm a') },
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <item.icon size={16} />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  </div>
)

export default QueryQuestion
