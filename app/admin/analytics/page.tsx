import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity, ArrowUp, ArrowDown } from "lucide-react"

const metrics = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-400",
  },
  {
    title: "Active Users",
    value: "2,543",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.8%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-400",
  },
  {
    title: "Avg. Session Time",
    value: "8m 42s",
    change: "-2.3%",
    trend: "down",
    icon: Activity,
    color: "text-cyan-400",
  },
]

const topPages = [
  { page: "/dashboard", views: 12543, uniqueVisitors: 8234, avgTime: "5m 23s" },
  { page: "/portfolio", views: 9876, uniqueVisitors: 6543, avgTime: "7m 12s" },
  { page: "/skills", views: 7654, uniqueVisitors: 5432, avgTime: "4m 45s" },
  { page: "/jobs", views: 6543, uniqueVisitors: 4321, avgTime: "6m 34s" },
  { page: "/resume", views: 5432, uniqueVisitors: 3456, avgTime: "8m 56s" },
]

const recentActivity = [
  { event: "New user registration", user: "john@example.com", time: "2 minutes ago" },
  { event: "Pro subscription purchased", user: "jane@example.com", time: "15 minutes ago" },
  { event: "Portfolio created", user: "bob@example.com", time: "23 minutes ago" },
  { event: "Resume downloaded", user: "alice@example.com", time: "45 minutes ago" },
  { event: "Job match found", user: "charlie@example.com", time: "1 hour ago" },
]

export default function AdminAnalyticsPage() {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-slate-400">Monitor platform performance and user behavior</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <Card
              key={metric.title}
              className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50 hover:border-purple-500/50 transition-all"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">{metric.title}</CardTitle>
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="flex items-center gap-1 text-xs">
                  {metric.trend === "up" ? (
                    <ArrowUp className="h-3 w-3 text-green-400" />
                  ) : (
                    <ArrowDown className="h-3 w-3 text-red-400" />
                  )}
                  <span className={metric.trend === "up" ? "text-green-400" : "text-red-400"}>{metric.change}</span>
                  <span className="text-slate-500">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Top Pages</CardTitle>
              <CardDescription className="text-slate-400">Most visited pages this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-200">{page.page}</p>
                      <p className="text-xs text-slate-500">
                        {page.views.toLocaleString()} views • {page.uniqueVisitors.toLocaleString()} unique
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-400">{page.avgTime}</p>
                      <p className="text-xs text-slate-500">avg. time</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-slate-400">Latest platform events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse" />
                    <div className="flex-1">
                      <p className="text-sm text-slate-200">{activity.event}</p>
                      <p className="text-xs text-slate-500">{activity.user}</p>
                    </div>
                    <span className="text-xs text-slate-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
          <CardHeader>
            <CardTitle className="text-white">User Growth</CardTitle>
            <CardDescription className="text-slate-400">Monthly user registration trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {[420, 580, 720, 650, 890, 1020, 1150, 980, 1240, 1380, 1520, 1680].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-purple-600 to-blue-600 rounded-t-lg hover:from-purple-500 hover:to-blue-500 transition-all cursor-pointer"
                    style={{ height: `${(value / 1680) * 100}%` }}
                  />
                  <span className="text-xs text-slate-500">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
