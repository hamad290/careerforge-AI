import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const securityLogs = [
  {
    id: 1,
    event: "Failed login attempt",
    user: "unknown@example.com",
    ip: "192.168.1.100",
    severity: "high",
    time: "2 minutes ago",
  },
  {
    id: 2,
    event: "Password changed",
    user: "john@example.com",
    ip: "192.168.1.50",
    severity: "low",
    time: "15 minutes ago",
  },
  {
    id: 3,
    event: "Multiple failed login attempts",
    user: "admin@example.com",
    ip: "203.0.113.45",
    severity: "critical",
    time: "1 hour ago",
  },
  {
    id: 4,
    event: "API key generated",
    user: "jane@example.com",
    ip: "192.168.1.75",
    severity: "medium",
    time: "2 hours ago",
  },
  {
    id: 5,
    event: "Two-factor authentication enabled",
    user: "bob@example.com",
    ip: "192.168.1.120",
    severity: "low",
    time: "3 hours ago",
  },
]

const threats = [
  { type: "Brute Force Attacks", count: 23, blocked: 23, status: "blocked" },
  { type: "SQL Injection Attempts", count: 7, blocked: 7, status: "blocked" },
  { type: "XSS Attempts", count: 12, blocked: 12, status: "blocked" },
  { type: "DDoS Attempts", count: 3, blocked: 3, status: "blocked" },
]

export default function AdminSecurityPage() {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Security Center</h1>
          <p className="text-slate-400">Monitor and manage platform security</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Security Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">98/100</div>
              <p className="text-xs text-slate-500">Excellent</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Threats Blocked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">45</div>
              <p className="text-xs text-slate-500">Last 24 hours</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">892</div>
              <p className="text-xs text-slate-500">Currently online</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">2FA Enabled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyan-400">67%</div>
              <p className="text-xs text-slate-500">Of all users</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                Security Settings
              </CardTitle>
              <CardDescription className="text-slate-400">Configure platform security features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">Two-Factor Authentication</Label>
                  <p className="text-xs text-slate-500">Require 2FA for all admin accounts</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">IP Whitelist</Label>
                  <p className="text-xs text-slate-500">Restrict admin access to specific IPs</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">Session Timeout</Label>
                  <p className="text-xs text-slate-500">Auto-logout after 30 minutes of inactivity</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">Rate Limiting</Label>
                  <p className="text-xs text-slate-500">Limit API requests per user</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                Threat Detection
              </CardTitle>
              <CardDescription className="text-slate-400">Recent security threats blocked</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {threats.map((threat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                    <div>
                      <p className="text-sm font-medium text-slate-200">{threat.type}</p>
                      <p className="text-xs text-slate-500">
                        {threat.blocked} of {threat.count} blocked
                      </p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Blocked
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
          <CardHeader>
            <CardTitle className="text-white">Security Logs</CardTitle>
            <CardDescription className="text-slate-400">Recent security events and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-transparent">
                  <TableHead className="text-slate-400">Event</TableHead>
                  <TableHead className="text-slate-400">User</TableHead>
                  <TableHead className="text-slate-400">IP Address</TableHead>
                  <TableHead className="text-slate-400">Severity</TableHead>
                  <TableHead className="text-slate-400">Time</TableHead>
                  <TableHead className="text-slate-400">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {securityLogs.map((log) => (
                  <TableRow key={log.id} className="border-slate-800 hover:bg-slate-800/30">
                    <TableCell className="text-slate-200">{log.event}</TableCell>
                    <TableCell className="text-slate-400">{log.user}</TableCell>
                    <TableCell className="text-slate-400 font-mono text-xs">{log.ip}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          log.severity === "critical"
                            ? "destructive"
                            : log.severity === "high"
                              ? "default"
                              : log.severity === "medium"
                                ? "secondary"
                                : "outline"
                        }
                        className={
                          log.severity === "critical"
                            ? "bg-red-500/20 text-red-400 border-red-500/30"
                            : log.severity === "high"
                              ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                              : log.severity === "medium"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-green-500/20 text-green-400 border-green-500/30"
                        }
                      >
                        {log.severity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-400">{log.time}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
