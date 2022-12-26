import { APP_ROUTES } from '@const/route.const';
import Link from 'next/link';

export default function ResearchPage() {
  return <div>
    {
      APP_ROUTES.research.map((e, i) => <Link key={i} className="base-navlink" href={{pathname: `/research/${e.path}`}} >{e.label}</Link>)
    }
  </div>
}