import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Settings, Mail, Bell, Database, Palette, Globe } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Settings</h1>
          <p className="text-slate-400">Configure platform settings and preferences</p>
        </div>

        <div className="max-w-4xl space-y-6">
          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Settings className="h-5 w-5 text-purple-400" />
                General Settings
              </CardTitle>
              <CardDescription className="text-slate-400">Basic platform configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-200">Platform Name</Label>
                <Input defaultValue="CareerForge AI" className="bg-slate-800/50 border-slate-700" />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-200">Support Email</Label>
                <Input
                  type="email"
                  defaultValue="support@careerforge.ai"
                  className="bg-slate-800/50 border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-200">Platform Description</Label>
                <Textarea
                  defaultValue="AI-powered career assistant helping professionals build better portfolios and find their dream jobs."
                  className="min-h-24 bg-slate-800/50 border-slate-700"
                />
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                Email Configuration
              </CardTitle>
              <CardDescription className="text-slate-400">Configure email service settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-200">SMTP Host</Label>
                <Input defaultValue="smtp.example.com" className="bg-slate-800/50 border-slate-700" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-200">SMTP Port</Label>
                  <Input defaultValue="587" className="bg-slate-800/50 border-slate-700" />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-200">Encryption</Label>
                  <Input defaultValue="TLS" className="bg-slate-800/50 border-slate-700" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-slate-200">From Email</Label>
                <Input defaultValue="noreply@careerforge.ai" className="bg-slate-800/50 border-slate-700" />
              </div>
              <Button variant="outline" className="border-slate-700 hover:bg-slate-800/50 bg-transparent">
                Test Email Connection
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="h-5 w-5 text-cyan-400" />
                Notification Settings
              </CardTitle>
              <CardDescription className="text-slate-400">Manage admin notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">New User Registrations</Label>
                  <p className="text-xs text-slate-500">Get notified when new users sign up</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">Subscription Changes</Label>
                  <p className="text-xs text-slate-500">Alerts for subscription upgrades/cancellations</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">Security Alerts</Label>
                  <p className="text-xs text-slate-500">Critical security events and threats</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">System Updates</Label>
                  <p className="text-xs text-slate-500">Platform maintenance and updates</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Database className="h-5 w-5 text-green-400" />
                Database Settings
              </CardTitle>
              <CardDescription className="text-slate-400">Database configuration and maintenance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-800/30">
                  <p className="text-sm text-slate-400 mb-1">Database Size</p>
                  <p className="text-2xl font-bold text-white">2.4 GB</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/30">
                  <p className="text-sm text-slate-400 mb-1">Last Backup</p>
                  <p className="text-2xl font-bold text-white">2h ago</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 border-slate-700 hover:bg-slate-800/50 bg-transparent">
                  Backup Now
                </Button>
                <Button variant="outline" className="flex-1 border-slate-700 hover:bg-slate-800/50 bg-transparent">
                  Optimize Database
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Palette className="h-5 w-5 text-pink-400" />
                Appearance Settings
              </CardTitle>
              <CardDescription className="text-slate-400">Customize platform appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-200">Primary Color</Label>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 border-2 border-white cursor-pointer" />
                  <div className="w-10 h-10 rounded-lg bg-purple-600 border-2 border-transparent cursor-pointer" />
                  <div className="w-10 h-10 rounded-lg bg-cyan-600 border-2 border-transparent cursor-pointer" />
                  <div className="w-10 h-10 rounded-lg bg-green-600 border-2 border-transparent cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="space-y-0.5">
                  <Label className="text-slate-200">Dark Mode Default</Label>
                  <p className="text-xs text-slate-500">Set dark mode as default theme</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="h-5 w-5 text-yellow-400" />
                API Settings
              </CardTitle>
              <CardDescription className="text-slate-400">Manage API keys and integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-200">OpenAI API Key</Label>
                <Input
                  type="password"
                  defaultValue="sk-••••••••••••••••"
                  className="bg-slate-800/50 border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-200">Stripe API Key</Label>
                <Input
                  type="password"
                  defaultValue="sk_test_••••••••••••••••"
                  className="bg-slate-800/50 border-slate-700"
                />
              </div>
              <Button variant="outline" className="border-slate-700 hover:bg-slate-800/50 bg-transparent">
                Generate New API Key
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
